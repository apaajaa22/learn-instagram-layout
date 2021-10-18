import React from "react"

function Content() {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ]
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {data.map((res) => {
        return (
          <div
            style={{
              background: "yellow",
              height: 400,
              marginTop: 20,
            }}
          />
        )
      })}
    </div>
  )
}

export default Content
