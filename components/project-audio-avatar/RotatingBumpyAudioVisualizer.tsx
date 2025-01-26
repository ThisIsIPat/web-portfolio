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

const RotatingBumpyAudioVisualizer: React.FC<RoundBumpyAudioVisualizerProps> = (
    {
        analyserNode,
        extractVolume = calculateAverageVolume,
        baseSpeed = -0.1,
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
                    const rotationsPerSecond = baseSpeed + speedAmplifier / (1 + Math.exp(-extractedVolume / 10 + 3));
                    rotation -= (rotationsPerSecond * deltaTime) / 1000 * 360;
                    if (rotation >= 360) rotation -= 360;
                    if (rotation < 0) rotation += 360;
                    ref.current.style.transform = `rotate(${rotation}deg)`;
                };
            }}
            renderAnimatedElement={(ref) => (
                <svg
                    ref={ref}
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 200 200"
                    style={{position: "absolute", transform: "translate(-50%, -50%)"}}
                >
                    <g clipPath="url(#clip0_103_15)">
                        <path
                            fill="url(#paint0_linear_103_15)"
                            d="M93.68 5.155a10 10 0 0 1 12.64 0l7.933 6.47a10.002 10.002 0 0 0 8.93 1.904l9.856-2.664a10 10 0 0 1 11.533 5.14l4.657 9.21a10 10 0 0 0 7.359 5.364l10.129 1.605a10 10 0 0 1 8.422 9.364l.533 10.39a10 10 0 0 0 4.527 7.865l8.666 5.649a10 10 0 0 1 3.878 11.951l-3.728 9.743a10 10 0 0 0 .943 9.007l5.66 8.746a10 10 0 0 1-1.312 12.49l-7.33 7.359a9.998 9.998 0 0 0-2.792 8.621l1.631 10.299a10.003 10.003 0 0 1-6.284 10.896l-9.61 3.7a10.001 10.001 0 0 0-6.072 6.765l-2.661 10.018a10 10 0 0 1-10.199 7.419l-10.209-.546a10 10 0 0 0-8.328 3.719l-6.438 8.008a10 10 0 0 1-12.361 2.63l-9.086-4.665a10.004 10.004 0 0 0-9.134 0l-9.087 4.665a9.999 9.999 0 0 1-12.36-2.63l-6.438-8.008a10 10 0 0 0-8.328-3.719l-10.209.546a10 10 0 0 1-10.2-7.419l-2.66-10.018a10 10 0 0 0-6.072-6.765l-9.61-3.7a10 10 0 0 1-6.284-10.896l1.631-10.299a10 10 0 0 0-2.792-8.621l-7.33-7.359a10 10 0 0 1-1.312-12.49l5.66-8.746a10 10 0 0 0 .943-9.007l-3.728-9.743a10 10 0 0 1 3.878-11.951l8.666-5.649a10 10 0 0 0 4.527-7.865l.533-10.39a10 10 0 0 1 8.422-9.364l10.129-1.605a10 10 0 0 0 7.359-5.364l4.657-9.21a10 10 0 0 1 11.533-5.14l9.856 2.664a10 10 0 0 0 8.93-1.904l7.933-6.47Z"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                        />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_103_15" x1="177" x2="39.5" y1="0" y2="152.5"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor={gradientFillColor1}/>
                            <stop offset="1" stopColor={gradientFillColor2}/>
                        </linearGradient>
                        <clipPath id="clip0_103_15">
                            <path fill="#fff" d="M0 0h200v200H0z"/>
                        </clipPath>
                    </defs>
                </svg>
            )}
        />
    );
};

export default RotatingBumpyAudioVisualizer;