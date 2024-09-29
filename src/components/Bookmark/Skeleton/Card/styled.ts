import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const pulseKeyframes = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
`;

export const SkeletonCard = styled.div`
  background-color: #e0e0e0;
  border-radius: 10px;
  width: 13.75rem;
  height: 14.75rem;
  animation: ${pulseKeyframes} 1.5s infinite;
`;

export const SkeletonImageBox = styled.div`
  background-color: #e0e0e0;
  width: 13.75rem;
  height: 12.5rem;
  border-radius: 10px 10px 0 0;
`;

export const SkeletonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  height: 1.25rem;
  align-items: center;
`;

export const SkeletonTitle = styled.div`
  background-color: #e0e0e0;
  width: 70%;
  height: 1rem;
  border-radius: 4px;
`;

export const SkeletonKebabButton = styled.div`
  background-color: #e0e0e0;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
`;

export const SkeletonRegion = styled.div`
  background-color: #e0e0e0;
  width: 40%;
  height: 0.75rem;
  border-radius: 4px;
  margin: 0.25rem 0;
`;

export const SkeletonDate = styled.div`
  background-color: #e0e0e0;
  width: 30%;
  height: 0.75rem;
  border-radius: 4px;
`;
