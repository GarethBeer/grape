import React from "react";

const Faces = props => {
	const { click } = props;
	return (
		<div>
			<button onClick={click} name="sad">
				😭
			</button>
			<button onClick={click} name="notSoSad">
				😞
			</button>
			<button onClick={click} name="ok">
				😒
			</button>
			<button onClick={click} name="better">
				🙂
			</button>
			<button onClick={click} name="good">
				😀
			</button>
		</div>
	);
};

export default Faces;
