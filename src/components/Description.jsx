function Description(props) {

    console.log(props);

    return (
        <>
            <p>
                The sum of {props.a} and {props.b} is {props.a + props.b}.
            </p>
        </>
    )
}

export default Description;