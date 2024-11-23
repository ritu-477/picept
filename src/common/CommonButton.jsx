
const CommonButton = ({ text, className,}) => {
  return (
        <button className={`text-base py-2 px-4 sm:py-3 sm:px-7 text-primary-white duration-300 ease-in-out rounded-full ${className}`}>{text}</button>)
}

export default CommonButton