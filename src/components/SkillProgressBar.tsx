'use client'

import CountUp from 'react-countup'
import { ProgressBar } from '@/components/ProgressBar'

interface ISkillsProgressBarProps {
  skill: string
  percentage: number
}

export const SkillProgressBar = ({
  skill,
  percentage,
}: ISkillsProgressBarProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-8">
        <p className="text-lg font-bold text-gray-600">{skill}</p>
        <p className="font-bold">
          <CountUp end={percentage} suffix="%" enableScrollSpy scrollSpyOnce />
        </p>
      </div>

      <ProgressBar percentage={percentage} />
    </div>
  )
}
