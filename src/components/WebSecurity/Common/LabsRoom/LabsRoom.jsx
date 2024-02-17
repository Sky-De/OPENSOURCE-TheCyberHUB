import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
    Header,
    LabRoomContainer,
    LabTitle,
    StartLabButton,
    Description,
    SolutionHeader,
    SolutionTitle,
    SolutionHolder,
    SolutionItem,
    SolutionIndex,
    SolutionText,
    DescriptionSection,
    SolutionSection,
} from "./LabsRoomElement";
import SubmissionBox from "../SubmissionBox";
import { ImLab } from "react-icons/im";
import { LabIcon } from "../../WebSecurityTopics/SubTopic";
import { HintContainer, HintIcon, SolutionContainer } from "../HintElements";
import { RiLightbulbFlashFill } from "react-icons/ri";
import SyntaxHighlight from "../SyntaxHighlight";

const Room = ({ roomData }) => {
    const { "*": path, id } = useParams();
    const roomType = path.split("/")[0];
    const data = roomData[id - 1];
    const [hidden, setHidden] = useState(0);

    return (
        <LabRoomContainer>
            <DescriptionSection>
                <Header>
                    <LabTitle>{data.title}</LabTitle>
                </Header>
                <Description>{data.description}</Description>
                {data?.code && data?.language && <SyntaxHighlight language={data?.language} code={data?.code} />}
            </DescriptionSection>
            <SolutionSection>
                {roomType === "labs" && (
                    <StartLabButton href={data.labLink} target="_blank" rel="noreferrer">
                        Start Lab
                        <LabIcon style={{ border: "1px black solid" }}>
                            {" "}
                            <ImLab />{" "}
                        </LabIcon>
                    </StartLabButton>
                )}
                {roomType === "labs" && roomType === "crack-me" && <SubmissionBox submitType={"flag"} />}
                <HintContainer>
                    Show Hint
                    <HintIcon>
                        {" "}
                        <RiLightbulbFlashFill />{" "}
                    </HintIcon>
                </HintContainer>
                <SolutionContainer>
                    <SolutionHeader onClick={() => setHidden((prevHidden) => (prevHidden === 0 ? 1 : 0))}>
                        <SolutionTitle>Solution</SolutionTitle>
                        <HintIcon>{hidden === 0 ? <FaAngleDown /> : <FaAngleUp />}</HintIcon>
                    </SolutionHeader>
                    {hidden === 1 && (
                        <SolutionHolder id="SolutionHolder">
                            {data?.solution?.map((data, index) => (
                                <SolutionItem key={index}>
                                    <SolutionIndex>{id + 1}.</SolutionIndex>
                                    <SolutionText>{data}</SolutionText>
                                </SolutionItem>
                            ))}
                        </SolutionHolder>
                    )}
                </SolutionContainer>
            </SolutionSection>
        </LabRoomContainer>
    );
};

export default Room;
