function ColoredMessage(props: { color: string; children: string }) {
  const { color, children } = props
  const contentStyle = {
    color,
    fontSize: "20px",
  }

  return <p style={contentStyle}>{children}</p>
}

export default ColoredMessage
