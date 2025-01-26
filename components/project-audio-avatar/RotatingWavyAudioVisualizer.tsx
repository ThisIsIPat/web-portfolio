import React from "react";
import AudioVisualizer from "@/components/project-audio-avatar/AudioVisualizer";

interface RoundBumpyAudioVisualizerProps {
    analyserNode: AnalyserNode;
    extractVolume?: (frequencyVolumes: number[]) => number;
    baseSpeed?: number;
    speedAmplifier?: number;
    color?: string;
    size?: string;
    style?: {
        gradientFillColor1?: string;
        gradientFillColor2?: string;
        strokeColor?: string;
        strokeWidth?: string;
    }
}

const calculateAverageVolume = (frequencyVolumes: number[]) => {
    return frequencyVolumes.length
        ? frequencyVolumes.reduce((acc, volume) => acc + volume, 0) / frequencyVolumes.length
        : 0;
};

const RoundBumpyAudioVisualizer: React.FC<RoundBumpyAudioVisualizerProps> = (
    {
        analyserNode,
        extractVolume = calculateAverageVolume,
        baseSpeed = 0,
        speedAmplifier = 3.5,
        size = "100%",
        style: {
            gradientFillColor1: gradientFillColor1 = "white",
            gradientFillColor2: gradientFillColor2 = "purple",
            strokeColor: strokeColor = "none",
            strokeWidth: strokeWidth = "0"
        } = {}
    }) => {
    return (
        <AudioVisualizer<SVGSVGElement>
            analyserNode={analyserNode}
            setupElementAnimation={(ref) => {
                let rotation = 0;

                return (deltaTime, frequencyVolumes) => {
                    if (!ref.current) return;

                    const extractedVolume = extractVolume(frequencyVolumes);
                    const rotationsPerSecond = baseSpeed + speedAmplifier / (1 + Math.exp(-extractedVolume / 10 + 5));
                    rotation += (rotationsPerSecond * deltaTime) / 1000 * 360;
                    if (rotation >= 360) rotation -= 360;
                    if (rotation < 0) rotation += 360;
                    ref.current.style.transform = `rotate(${rotation}deg)`;
                };
            }}
            renderAnimatedElement={(ref) => (
                <svg xmlns="http://www.w3.org/2000/svg"
                     ref={ref}
                     width={size}
                     height={size}
                     fill="none"
                     viewBox="0 0 200 200"
                     style={{position: "absolute", transform: "translate(-50%, -50%)"}}
                >
                    <path fill="url(#paint0_linear_119_275)"
                          stroke={strokeColor}
                          strokeWidth={strokeWidth}
                          d="M127.14 200c-27.146 0-27.146-32.577-54.291-32.577-31.244 0-72.849-9.037-72.849-40.29 0-27.144 32.568-27.144 32.568-54.288C32.568 41.613 41.605 0 72.86 0c27.146 0 27.146 32.577 54.291 32.577 31.233 0 72.849 9.037 72.849 40.29 0 27.145-32.579 27.145-32.579 54.289-.012 31.288-9.037 72.844-40.281 72.844Z"></path>
                    <defs>
                        <linearGradient id="paint0_linear_119_275" x1="100" x2="100" y1="0" y2="200"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor={gradientFillColor1}></stop>
                            <stop offset="1" stopColor={gradientFillColor2}></stop>
                        </linearGradient>
                    </defs>
                </svg>
            )}
        />
    );
};

export default RoundBumpyAudioVisualizer;