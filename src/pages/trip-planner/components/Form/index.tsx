import { zodResolver } from "@hookform/resolvers/zod";
import { MutationFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { PlannerFormType } from "@/types";

import * as S from "./styled";
import PlannerInput from "../Input";
import IntensityRadio from "../Radio";

const plannerSchema = z.object({
  departureLocation: z.string().min(1, "출발지를 입력해 주세요."),
  arrivalLocation: z.string().min(1, "도착지를 입력해 주세요."),
  departureDate: z.string().min(1, "시작 날짜를 입력해 주세요."),
  arrivalDate: z.string().min(1, "도착 날짜를 입력해 주세요."),
  numberOfPeople: z.coerce.number().min(1, "여행 인원을 입력해 주세요."),
  travelIntensity: z.string().min(1, "여행 강도를 설정해 주세요."),
  totalBudget: z.coerce.number().min(1, "예상 예산을 입력해 주세요."),
  mealCount: z.coerce.number().min(1, "하루 식사 횟수를 입력해 주세요."),
});

interface PlannerFormProps {
  mutate: (formData: PlannerFormType) => void;
}

function PlannerForm({ mutate }: PlannerFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      departureLocation: "",
      arrivalLocation: "",
      departureDate: "",
      arrivalDate: "",
      numberOfPeople: 2,
      travelIntensity: "중",
      totalBudget: 10,
      mealCount: 3,
    },
    resolver: zodResolver(plannerSchema),
  });

  const selectedIntensity = watch("travelIntensity");

  const onSubmit = async (formData: PlannerFormType) => {
    mutate(formData);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>✈️ AI가 추천해주는 여행 플래너 </S.Title>
        <S.FlexBox>
          <PlannerInput
            type="text"
            labelText="출발지"
            icon="marker"
            placeholder="출발지를 입력해 주세요."
            {...register("departureLocation")}
            errorMessage={errors.departureLocation?.message}
          />
          <PlannerInput
            type="text"
            labelText="도착지"
            icon="marker"
            placeholder="도착지를 입력해 주세요."
            {...register("arrivalLocation")}
            errorMessage={errors.arrivalLocation?.message}
          />
        </S.FlexBox>
        <S.FlexBox>
          <PlannerInput
            type="date"
            labelText="시작 날짜"
            icon="calendar"
            {...register("departureDate")}
            errorMessage={errors.departureDate?.message}
          />
          <PlannerInput
            type="date"
            labelText="끝 날짜"
            icon="calendar"
            {...register("arrivalDate")}
            errorMessage={errors.arrivalDate?.message}
          />
        </S.FlexBox>
        <S.FlexBox>
          <PlannerInput
            type="number"
            labelText="인원(명)"
            icon="people"
            placeholder="여행 인원을 입력해 주세요."
            {...register("numberOfPeople")}
            errorMessage={errors.numberOfPeople?.message}
          />
          <IntensityRadio
            selected={selectedIntensity}
            {...register("travelIntensity")}
          />
        </S.FlexBox>
        <S.FlexBox>
          <PlannerInput
            type="number"
            labelText="총 예산(만원)"
            icon="price"
            placeholder="예상 예산을 입력해 주세요"
            {...register("totalBudget")}
            errorMessage={errors.totalBudget?.message}
          />
          <PlannerInput
            type="number"
            labelText="하루 식사 횟수"
            icon="meal"
            placeholder="하루 식사 횟수를 입력해 주세요."
            {...register("mealCount")}
            errorMessage={errors.mealCount?.message}
          />
        </S.FlexBox>
        <S.SubmitButton disabled={!isValid} type="submit">
          여행 플래너 추천 받기
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}

export default PlannerForm;
