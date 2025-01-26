// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wQ4RJSg4PPFwQX7RMUQQuF
// Component: wZOIqidIYW86

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: wQ4RJSg4PPFwQX7RMUQQuF/projectcss
import sty from "./PlasmicProgrammingLanguage.module.css"; // plasmic-import: wZOIqidIYW86/css

import JavascriptOriginalSvgIcon from "./icons/PlasmicIcon__JavascriptOriginalSvg"; // plasmic-import: q0zkt1_3RLSK/icon
import TypescriptOriginalSvgIcon from "./icons/PlasmicIcon__TypescriptOriginalSvg"; // plasmic-import: SkaJjy8QfpqU/icon
import PythonOriginalSvgIcon from "./icons/PlasmicIcon__PythonOriginalSvg"; // plasmic-import: yL-7BuDhWHZG/icon
import NodejsOriginalSvgIcon from "./icons/PlasmicIcon__NodejsOriginalSvg"; // plasmic-import: eQJsu-NWetF8/icon
import GithubOriginalSvgIcon from "./icons/PlasmicIcon__GithubOriginalSvg"; // plasmic-import: 3xGXPNZgAfsO/icon

createPlasmicElementProxy;

export type PlasmicProgrammingLanguage__VariantMembers = {
  language:
    | "javaScript"
    | "typeScript"
    | "python"
    | "nodeJs"
    | "unnamedVariant";
};
export type PlasmicProgrammingLanguage__VariantsArgs = {
  language?: SingleChoiceArg<
    "javaScript" | "typeScript" | "python" | "nodeJs" | "unnamedVariant"
  >;
};
type VariantPropType = keyof PlasmicProgrammingLanguage__VariantsArgs;
export const PlasmicProgrammingLanguage__VariantProps =
  new Array<VariantPropType>("language");

export type PlasmicProgrammingLanguage__ArgsType = {};
type ArgPropType = keyof PlasmicProgrammingLanguage__ArgsType;
export const PlasmicProgrammingLanguage__ArgProps = new Array<ArgPropType>();

export type PlasmicProgrammingLanguage__OverridesType = {
  root?: Flex__<"div">;
  general0Container?: Flex__<"div">;
  textContainer?: Flex__<"div">;
  text?: Flex__<"div">;
  arrow0Container?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultProgrammingLanguageProps {
  language?: SingleChoiceArg<
    "javaScript" | "typeScript" | "python" | "nodeJs" | "unnamedVariant"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProgrammingLanguage__RenderFunc(props: {
  variants: PlasmicProgrammingLanguage__VariantsArgs;
  args: PlasmicProgrammingLanguage__ArgsType;
  overrides: PlasmicProgrammingLanguage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "language",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.language
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        data-plasmic-name={"general0Container"}
        data-plasmic-override={overrides.general0Container}
        className={classNames(projectcss.all, sty.general0Container, {
          [sty.general0Containerlanguage_nodeJs]: hasVariant(
            $state,
            "language",
            "nodeJs"
          ),
          [sty.general0Containerlanguage_unnamedVariant]: hasVariant(
            $state,
            "language",
            "unnamedVariant"
          )
        })}
      >
        <div
          data-plasmic-name={"textContainer"}
          data-plasmic-override={overrides.textContainer}
          className={classNames(projectcss.all, sty.textContainer, {
            [sty.textContainerlanguage_javaScript]: hasVariant(
              $state,
              "language",
              "javaScript"
            ),
            [sty.textContainerlanguage_nodeJs]: hasVariant(
              $state,
              "language",
              "nodeJs"
            ),
            [sty.textContainerlanguage_python]: hasVariant(
              $state,
              "language",
              "python"
            ),
            [sty.textContainerlanguage_typeScript]: hasVariant(
              $state,
              "language",
              "typeScript"
            )
          })}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              {
                [sty.textlanguage_javaScript]: hasVariant(
                  $state,
                  "language",
                  "javaScript"
                ),
                [sty.textlanguage_nodeJs]: hasVariant(
                  $state,
                  "language",
                  "nodeJs"
                ),
                [sty.textlanguage_python]: hasVariant(
                  $state,
                  "language",
                  "python"
                ),
                [sty.textlanguage_typeScript]: hasVariant(
                  $state,
                  "language",
                  "typeScript"
                ),
                [sty.textlanguage_unnamedVariant]: hasVariant(
                  $state,
                  "language",
                  "unnamedVariant"
                )
              }
            )}
          >
            {hasVariant($state, "language", "unnamedVariant")
              ? "GitHub"
              : hasVariant($state, "language", "nodeJs")
              ? "node.js"
              : hasVariant($state, "language", "python")
              ? "Python"
              : hasVariant($state, "language", "typeScript")
              ? "TypeScript"
              : hasVariant($state, "language", "javaScript")
              ? "JavaScript"
              : "Language"}
          </div>
        </div>
        <div
          data-plasmic-name={"arrow0Container"}
          data-plasmic-override={overrides.arrow0Container}
          className={classNames(projectcss.all, sty.arrow0Container)}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          />
        </div>
      </div>
      <PlasmicIcon__
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant($state, "language", "unnamedVariant")
            ? GithubOriginalSvgIcon
            : hasVariant($state, "language", "nodeJs")
            ? NodejsOriginalSvgIcon
            : hasVariant($state, "language", "python")
            ? PythonOriginalSvgIcon
            : hasVariant($state, "language", "typeScript")
            ? TypescriptOriginalSvgIcon
            : hasVariant($state, "language", "javaScript")
            ? JavascriptOriginalSvgIcon
            : "div"
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svglanguage_javaScript]: hasVariant(
            $state,
            "language",
            "javaScript"
          ),
          [sty.svglanguage_nodeJs]: hasVariant($state, "language", "nodeJs"),
          [sty.svglanguage_python]: hasVariant($state, "language", "python"),
          [sty.svglanguage_typeScript]: hasVariant(
            $state,
            "language",
            "typeScript"
          ),
          [sty.svglanguage_unnamedVariant]: hasVariant(
            $state,
            "language",
            "unnamedVariant"
          )
        })}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "general0Container",
    "textContainer",
    "text",
    "arrow0Container",
    "freeBox",
    "svg"
  ],
  general0Container: [
    "general0Container",
    "textContainer",
    "text",
    "arrow0Container",
    "freeBox"
  ],
  textContainer: ["textContainer", "text"],
  text: ["text"],
  arrow0Container: ["arrow0Container", "freeBox"],
  freeBox: ["freeBox"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  general0Container: "div";
  textContainer: "div";
  text: "div";
  arrow0Container: "div";
  freeBox: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProgrammingLanguage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProgrammingLanguage__VariantsArgs;
    args?: PlasmicProgrammingLanguage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProgrammingLanguage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProgrammingLanguage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProgrammingLanguage__ArgProps,
          internalVariantPropNames: PlasmicProgrammingLanguage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProgrammingLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProgrammingLanguage";
  } else {
    func.displayName = `PlasmicProgrammingLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicProgrammingLanguage = Object.assign(
  // Top-level PlasmicProgrammingLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    general0Container: makeNodeComponent("general0Container"),
    textContainer: makeNodeComponent("textContainer"),
    text: makeNodeComponent("text"),
    arrow0Container: makeNodeComponent("arrow0Container"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicProgrammingLanguage
    internalVariantProps: PlasmicProgrammingLanguage__VariantProps,
    internalArgProps: PlasmicProgrammingLanguage__ArgProps
  }
);

export default PlasmicProgrammingLanguage;
/* prettier-ignore-end */
