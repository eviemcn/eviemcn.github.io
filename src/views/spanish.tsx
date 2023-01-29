import React, { useEffect, useState } from "react";
import { spanishPhrases, spanishWords } from "../components/spanish-helper";
import { LoadingWrapper } from "../components/top-albums/top-albums-styles";
import { Circles } from "react-loader-spinner";
import {
  DetailsWrapper,
  SelectOption,
  SelectWrapper,
  SpanishText,
  SpanishWrapper,
  TranslationText,
} from "./spanish-styles";

const options = [
  { value: "random", label: "Random" },
  { value: "words", label: "All Words" },
  { value: "phrases", label: "All Phrases" },
];

const getSpanish = (option: string) => {
  const n = Math.floor(Math.random() * spanishWords.length);
  const a = Math.floor(Math.random() * spanishPhrases.length);

  if (option === "words") {
    return spanishWords;
  }
  if (option === "phrases") {
    return spanishPhrases;
  }
  return [spanishWords[n], spanishPhrases[a]];
};

export const Spanish = () => {
  const [content, setContent] = useState<any>(getSpanish("random"));
  const [showTranslation, setShowTranslation] = useState(8999);
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState<any>({
    value: "random",
    label: "Random",
  });

  useEffect(() => {
    setLoading(true);
    setContent(["", ""]);
    setContent(getSpanish(selection.value));
    setLoading(false);
  }, [selection]);

  return (
    <div className="Spanish">
      <DetailsWrapper>
        <h1>Español</h1>
        <p>
          I am currently working on learning spanish and would like a place to
          store words and phrases. <br />
        </p>
        <SelectWrapper>
          <div style={{ display: "flex" }}>
            <SelectOption
              lineDecoration={true}
              tabIndex="1"
              onClick={() => setSelection(options[0])}
            >
              <p>{options[0].label}</p>
            </SelectOption>
            <SelectOption
              lineDecoration={true}
              tabIndex="1"
              onClick={() => setSelection(options[1])}
            >
              <p>{options[1].label}</p>
            </SelectOption>
            <SelectOption tabIndex="1" onClick={() => setSelection(options[2])}>
              <p>{options[2].label}</p>
            </SelectOption>
          </div>
        </SelectWrapper>
      </DetailsWrapper>
      <SpanishWrapper random={selection.value === "random"}>
        {content?.map((arr: any, index: number) => {
          return (
            <>
              <SpanishText
                onMouseOver={() => setShowTranslation(index)}
                onMouseLeave={() => setShowTranslation(8999)}
                key={`spanish-${index}`}
              >
                {arr[0]}
              </SpanishText>
              <TranslationText
                showTranslation={showTranslation === index}
                key={`english-${index}`}
              >
                {arr[1]}
              </TranslationText>
              <br key={`break-${index}`} />
            </>
          );
        })}
      </SpanishWrapper>
    </div>
  );
};
