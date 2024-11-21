
const CommonHeading = ({ text, className }) => {
  return (
      <h2 className={` font-bold md:text-5xl sm:text-4xl text-3xl xl:text-6xl text-primary-white xl:leading-custom-7xl ${className}`}>{text}</h2>
  )
}

export default CommonHeading