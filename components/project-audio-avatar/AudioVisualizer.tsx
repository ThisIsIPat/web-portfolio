import {ReactElement, RefObject, useEffect, useRef } from "react";

const useAnimationFrame = (callback: (num: number) => void) => {
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>();

    const animate = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const request = requestAnimationFrame(animate);
        requestRef.current = request;
        return () => cancelAnimationFrame(request);
    }, []);
};

export default function AudioVisualizer<RefType>(
    props: {
        analyserNode?: AnalyserNode;
        setupElementAnimation: (ref: RefObject<RefType>) => ((deltaTime: number, frequencyVolumes: number[]) => void);
        renderAnimatedElement: (ref: RefObject<RefType>) => ReactElement;
    }
) {
    const animatedElementRef = useRef<RefType>(null);

    const frequencyVolumesCallback = useRef<() => number[]>();
    useEffect(() => {
        frequencyVolumesCallback.current = () => {
            if (props.analyserNode) {
                const dataArray = new Uint8Array(props.analyserNode.frequencyBinCount);
                props.analyserNode.getByteFrequencyData(dataArray);
                return Array.from(dataArray).map((value) => value / 256 * 100);
            } else {
                return [];
            }
        };
    }, [props.analyserNode]);

    const elementAnimation = useRef(props.setupElementAnimation(animatedElementRef));
    useAnimationFrame((deltaTime) => {
        if (deltaTime == 0) return;
        if (!elementAnimation.current) return;
        if (!frequencyVolumesCallback.current) return;

        const frequencyVolumes = frequencyVolumesCallback.current();
        if (elementAnimation.current) elementAnimation.current(deltaTime, frequencyVolumes);
    });

    return props.renderAnimatedElement(animatedElementRef);
}