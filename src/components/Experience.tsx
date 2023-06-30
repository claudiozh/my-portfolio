import { IEducationOrExperience } from '@/interfaces/education-or-experience'
import { education } from '@/utils/education'
import { experience } from '@/utils/experience'

type TimelineProps = {
  list: IEducationOrExperience[]
}

export const Experience = () => {
  const Timeline = ({ list }: TimelineProps) => {
    return (
      <div className="flex flex-1 justify-between  gap-4 rounded-3xl bg-white p-10 shadow-xl">
        <ol className="relative border-l border-red-400">
          {list.map(({ title, description, date }, key) => (
            <li className="mb-10 ml-4" key={key}>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-red-400 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <Timeline list={education} />
      <Timeline list={experience} />
    </div>
  )
}
