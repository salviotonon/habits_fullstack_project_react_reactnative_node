import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";

const availableWeekDays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

export const NewHabitForm = () => {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const createNewHabit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleToggleWeekDay = (weekDay: number) => {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemoveOne = weekDays.filter((day) => day !== weekDay);
      setWeekDays(weekDaysWithRemoveOne);
    } else {
      const weekDaysWithAddOne = [...weekDays, weekDay];

      setWeekDays(weekDaysWithAddOne);
    }
  };

  return (
    <form
      onSubmit={createNewHabit}
      className="w-full flex flex-col mt-6"
    >
      <label
        htmlFor="title"
        className="font-semibold leading-tight"
      >
        Qual seu comprometimento?
      </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
        placeholder="Ex: Exercícios, dormir bem, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
      />
      <label
        htmlFor=""
        className="mt-3"
      >
        Qual a recorrência?
      </label>
      <div className="flex flex-col mt-3 leading-tight">
        {availableWeekDays.map((weekdays, index) => {
          return (
            <Checkbox.Root
              key={weekdays}
              onCheckedChange={() => handleToggleWeekDay(index)}
              className="flex items-center gap-3 group mt-3"
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.CheckboxIndicator>
                  <Check
                    size={20}
                    color="white"
                  />
                </Checkbox.CheckboxIndicator>
              </div>
              <span className="  text-white leading-tight">{weekdays}</span>
            </Checkbox.Root>
          );
        })}
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold bg-green-600 justify-center hover:bg-green-500"
      >
        <Check
          size={20}
          weight="bold"
        />
        Confirmar
      </button>
    </form>
  );
};
