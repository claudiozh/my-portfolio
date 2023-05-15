import { education } from '@/utils/education'

export const Experience = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="bg-white flex flex-1  justify-between gap-4 shadow-xl p-10 rounded-3xl mt-12">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {education.map(({ title, description, date }, key) => (
            <li className="mb-10 ml-4" key={key}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
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

      <div className="bg-white flex flex-1  justify-between gap-4 shadow-xl p-10 rounded-3xl mt-12">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Março de 2019
            </time>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Conclusão do estágio
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Final do estágio na Prefeitura Municipal de Portalegre.
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Fevereiro de 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Conclusão do curso
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Conclusão do curso de Análise e Desenvolvimento de Sistemas no
              IFRN
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Janeiro 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Emprego
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Início do primeiro e atual emprego na Empresa Evocorp como
              desenvolvedor de software.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}
