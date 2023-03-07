const Title = (props) => {
    const {title, subtitle} = props
    return (
        <h1 className='section-title'>
            {title} <span>{subtitle}</span>
        </h1>
    )
}

export default Title;