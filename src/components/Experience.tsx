import { IEducationOrExperience } from '@/interfaces/education-or-experience'
import { education } from '@/utils/education'
import { experience } from '@/utils/experience'

type TimelineProps = {
  list: IEducationOrExperience[]
}

export const Experience = () => {
  const Timeline = ({ list }: TimelineProps) => {
    return (
      <div className="bg-white flex flex-1  justify-between gap-4 shadow-xl p-10 rounded-3xl">
        <ol className="relative border-l border-red-400">
          {list.map(({ title, description, date }, key) => (
            <li className="mb-10 ml-4" key={key}>
              <div className="absolute w-3 h-3 bg-red-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
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
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <Timeline list={education} />
      <Timeline list={experience} />
    </div>
  )
}
