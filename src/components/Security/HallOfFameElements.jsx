import styled from "styled-components";

export const HallOfFameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #fff;
    max-width: 1500px;
    gap: 25px;
`;

export const HallOfFameList = styled.ul`
    list-style-type: none;
    margin: 0;
    background: #090909;
    width: 100%;
    padding: 0 25px 25px;
    border-radius: 10px;
    gap: 25px;
`;

export const HallOfFameYearSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const HallOfFameMonthSection = styled.div`
    padding: 25px;
    background: #101010;
    border-radius: 10px;
    gap: 25px;
`;

export const HallOfFameYear = styled.h1`
    margin: 25px 0 0 0;
    font-style: italic;
    text-align: center;
`;

export const HallOfFameMonth = styled.h3``;

export const HallOfFameName = styled.li`
    padding: 0 25px;
`;

export const HallOfFameUsername = styled.li``;

export const HallOfFameProfile = styled.a``;