export default function Tabs({ buttons, children, ButtonsContainer = "menu" }) {
	// const ButtonsContainer = buttonsContainer;
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
