import React from "react";
import RotatingEggAudioVisualizer from "@/components/project-audio-avatar/RotatingEggAudioVisualizer";
import RotatingWavyAudioVisualizer from "@/components/project-audio-avatar/RotatingWavyAudioVisualizer";
import RotatingBumpyAudioVisualizer from "@/components/project-audio-avatar/RotatingBumpyAudioVisualizer";

interface SpinningVisualizer1Props {
    analyserNode: AnalyserNode;
}

const SpinningVisualizer1: React.FC<SpinningVisualizer1Props> = ({ analyserNode }) => {
    return (
        <div style={{
            width: "250px",
            height: "250px",
            left: 0,
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <RotatingEggAudioVisualizer
                analyserNode={analyserNode}
                extractVolume={(frequencyVolumes) => {
                    if (!frequencyVolumes.length) return 0;

                    const fourth = Math.floor(frequencyVolumes.length / 4);
                    const firstQuarterVolumes = frequencyVolumes.slice(0, fourth);
                    return firstQuarterVolumes.reduce((acc, volume) => acc + volume, 0) / firstQuarterVolumes.length;
                }}
                size={"300px"}
                style={{
                    gradientFillColor1: "#72668a",
                    gradientFillColor2: "#1c2e14",
                }}
            />
            <RotatingWavyAudioVisualizer
                analyserNode={analyserNode}
                extractVolume={(frequencyVolumes) => {
                    if (!frequencyVolumes.length) return 0;

                    const fourth = Math.floor(frequencyVolumes.length / 4);
                    const secondQuarterVolumes = frequencyVolumes.slice(fourth, fourth * 2);
                    return secondQuarterVolumes.reduce((acc, volume) => acc + volume, 0) / secondQuarterVolumes.length;
                }}
                size={"140px"}
                style={{
                    gradientFillColor1: "#707978",
                    gradientFillColor2: "#374971",
                }}
            />
            <RotatingBumpyAudioVisualizer
                analyserNode={analyserNode}
                extractVolume={(frequencyVolumes) => {
                    if (!frequencyVolumes.length) return 0;

                    const half = Math.floor(frequencyVolumes.length / 2);
                    const lastHalfVolumes = frequencyVolumes.slice(half, frequencyVolumes.length);
                    const calculateWeight = (index: number) => {
                        const weight = (frequencyVolumes.length - index) * 2;
                        return weight;
                    }
                    return lastHalfVolumes.reduce((acc, volume, index) =>
                            acc + volume * calculateWeight(index)
                        , 0) / lastHalfVolumes.length / frequencyVolumes.length * 2;
                }}
                size={"60px"}
                style={{
                    gradientFillColor1: "#ccb0be",
                    gradientFillColor2: "#72668a",
                }}
            />
        </div>
    );
};

export default SpinningVisualizer1;