// import { useState } from 'react'
// import { useInView } from 'react-intersection-observer'

// const Portfolio = () => {
//   const [activeMenuItem, setActiveMenuItem] = useState(null)

//   const handleSetActiveMenuItem = (id) => {
//     setActiveMenuItem(id)
//   }

//   const [introRef, introInView] = useInView({
//     threshold: 0.5,
//   })
//   const [project1Ref, project1InView] = useInView({
//     threshold: 0.5,
//   })
//   const [project2Ref, project2InView] = useInView({
//     threshold: 0.5,
//   })
//   const [project3Ref, project3InView] = useInView({
//     threshold: 0.5,
//   })
//   const [contactRef, contactInView] = useInView({
//     threshold: 0.5,
//   })

//   useEffect(() => {
//     if (introInView) {
//       handleSetActiveMenuItem('intro')
//     } else if (project1InView) {
//       handleSetActiveMenuItem('project-1')
//     } else if (project2InView) {
//       handleSetActiveMenuItem('project-2')
//     } else if (project3InView) {
//       handleSetActiveMenuItem('project-3')
//     } else if (contactInView) {
//       handleSetActiveMenuItem('contact')
//     }
//   }, [
//     introInView,
//     project1InView,
//     project2InView,
//     project3InView,
//     contactInView,
//   ])

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li className={activeMenuItem === 'intro' ? 'active' : null}>
//             <a href="#intro">Intro</a>
//           </li>
//           <li className={activeMenuItem === 'project-1' ? 'active' : null}>
//             <a href="#project-1">Project 1</a>
//           </li>
//           <li className={activeMenuItem === 'project-2' ? 'active' : null}>
//             <a href="#project-2">Project 2</a>
//           </li>
//           <li className={activeMenuItem === 'project-3' ? 'active' : null}>
//             <a href="#project-3">Project 3</a>
//           </li>
//           <li className={activeMenuItem === 'contact' ? 'active' : null}>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         <section ref={introRef} id="intro">
//           {/* Seção de introdução */}
//         </section>
//         <section ref={project1Ref} id="project-1">
//           {/* Seção do projeto 1 */}
//         </section>
//         <section ref={project2Ref} id="project-2">
//           {/* Seção do projeto 2 */}
//         </section>
//         <section ref={project3Ref} id="project-3">
//           {/* Seção do projeto 3 */}
//         </section>
//         <section ref={contactRef} id="contact">
//           {/* Seção de contato */}
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Portfolio
