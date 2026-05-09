// import { useEffect, useState } from "react";

// export function useActiveSection(sectionIds: string[]) {
//   const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

//   useEffect(() => {
//     const sections = sectionIds
//       .map((id) => document.getElementById(id))
//       .filter((section): section is HTMLElement => section !== null);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//         if (visible[0]) {
//           setActiveSection(visible[0].target.id);
//         }
//       },
//       {
//         rootMargin: "-35% 0px -45% 0px",
//         threshold: [0.2, 0.5, 0.8],
//       },
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, [sectionIds]);

//   return activeSection;
// }
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] ?? ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}