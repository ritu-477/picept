
const PrimaryPara = ({ text, className }) => {
  return (
      <p className={` font-bold md:text-2xl text-base text-grey ${className}`}>{text}</p>
  )
}

export default PrimaryPara