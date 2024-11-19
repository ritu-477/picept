
const CommonHeading = ({ text, className }) => {
  return (
      <h2 className={` font-bold md:text-5xl sm:text-4xl text-3xl lg:text-6xl text-primary-white lg:leading-custom-7xl ${className}`}>{text}</h2>
  )
}

export default CommonHeading