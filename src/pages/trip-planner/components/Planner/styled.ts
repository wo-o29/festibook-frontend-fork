import styled from "@emotion/styled";

import { TABLET_MEDIA_QUERY, MOBILE_MEDIA_QUERY } from "@/styles/const";

export const Container = styled.div`
  max-width: 120rem;
  min-width: 23.4375rem;
  width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media ${TABLET_MEDIA_QUERY} {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const DateBox = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  box-shadow:
    0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.12),
    0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.08),
    0rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.08);
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
`;

export const Date = styled.h2`
  font-weight: 600;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  padding-left: 0.25rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 1rem;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Info = styled.div`
  width: 40%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid #d3ddff;
  border-radius: 8px;
  padding: 0.5rem 1rem;

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0.5rem 0.5rem;
  }
`;

export const InfoTitle = styled.h3`
  text-align: center;
  padding: 0.5rem 0 0;
  font-size: 1.125rem;
  font-weight: 600;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.9rem;
  }
`;

export const InfoTime = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0 1rem;
  border-bottom: 1px solid #d3ddff;
  justify-content: center;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.875rem;
    justify-content: flex-start;
  }
`;
export const InfoDuration = styled(InfoTime)``;
export const InfoLocation = styled(InfoTime)`
  gap: 0.25rem;
`;
export const InfoPrice = styled(InfoTime)`
  border: none;
`;

export const UList = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #d3ddff;
  padding: 0.5rem 1rem 1rem;
  border-radius: 8px;
`;

export const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #d3ddff;
  padding: 0 0.5rem 0.5rem;
  align-items: center;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.875rem;
  }
`;
export const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
`;
export const Duration = styled(Time)``;
export const Location = styled(Time)``;
export const Price = styled(Time)``;

export const Description = styled.p`
  font-size: 0.875rem;
  padding: 0 0.5rem;
  color: #2c2c2c;
  line-height: 1.3rem;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 0.875rem;
  }
`;
