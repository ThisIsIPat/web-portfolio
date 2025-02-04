// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicProjectAudioAvatar,
  DefaultProjectAudioAvatarProps
} from "./plasmic/blank_website/PlasmicProjectAudioAvatar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import SpinningVisualizer1 from "@/components/project-audio-avatar/SpinningVisualizer1";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ProjectAudioAvatarProps extends Omit<DefaultProjectAudioAvatarProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultProjectAudioAvatarProps altogether and have
// total control over the props for your component.
export interface ProjectAudioAvatarProps
  extends DefaultProjectAudioAvatarProps {}

function ProjectAudioAvatar_(
  props: ProjectAudioAvatarProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicProjectAudioAvatar to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicProjectAudioAvatar are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all ProjectAudioAvatarProps here, but feel free
  // to do whatever works for you.

  // return <PlasmicProjectAudioAvatar root={{ ref }} {...props} />;

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
  };

  const handleAudioPause = () => {
    setIsAudioPlaying(false);
  };

  const [analyzerNode, setAnalyzerNode] = useState<AnalyserNode | null>(null);
  if (audioRef.current && !analyzerNode) {
    const audioContext = new (window.AudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;

    setAnalyzerNode(analyser);
  }


  return (
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
      >
        <SpinningVisualizer1 analyserNode={analyzerNode!}/>
        <audio
            ref={audioRef}
            src={"./aria-math.mp3"}
            controls
            onPlay={handleAudioPlay}
            onPause={handleAudioPause}
        />
      </div>
  );
}

const ProjectAudioAvatar = React.forwardRef(ProjectAudioAvatar_);
export default ProjectAudioAvatar;
