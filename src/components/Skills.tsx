import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'

export const Skills = () => {
  return (
    <div className="grid grid-cols-4 gap-10 justify-center mt-12">
      <div className="text-center  bg-green-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <FaNodeJs className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">Node.js</span>
      </div>

      <div className="text-center  bg-indigo-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <SiPostgresql className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">PostgreSQL</span>
      </div>

      <div className="text-center  bg-blue-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <TbBrandTypescript className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">TypeScript</span>
      </div>

      <div className="text-center  bg-red-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <FaHtml5 className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">HTML</span>
      </div>

      <div className="text-center border bg-orange-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <FaCss3Alt className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">CSS</span>
      </div>

      <div className="text-center  bg-blue-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <FaReact className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">React</span>
      </div>

      <div className="text-center  bg-indigo-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <TbBrandNextjs className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">Nextjs</span>
      </div>

      <div className="text-center bg-yellow-500 py-5 rounded-3xl shadow-md hover:-rotate-6">
        <FaGitAlt className="text-gray-50 text-7xl mx-auto" />
        <span className="text-lg font-bold text-gray-50">Git</span>
      </div>
    </div>
  )
}
