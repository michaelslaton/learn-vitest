import { render, screen } from "@testing-library/react";
import App from "./App";

export const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
  {
    userId: 2,
    id: 5,
    title: 'second post title',
    body: 'second post body',
  },
  {
    userId: 3,
    id: 6,
    title: 'third post title',
    body: 'third post body',
  },
]

describe("App", ()=>{
  it("should have hello world", ()=>{
    render(<App/>)
    const message = screen.queryByText(/Hello World/i)
    expect(message).toBeVisible();
  })

  it("the api works", async ()=>{
    render(<App/>)
    
    expect(await screen.findByText(3)).toBeInTheDocument()
  })
})