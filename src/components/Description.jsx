function Description(props) {

    let a = 50;
    let b = 60;

    // get the function from the parent component as a prop

    // execute the function to pass the values to the parent component
    props.get(a, b);

    return (
        <>
            <p>
                The sum of {a} and {b} is {a + b}.
            </p>
        </>
    )
}

export default Description;