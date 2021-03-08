import styled from "styled-components";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 1rem;
  padding: 1rem;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  box-shadow: 2px 2px 4px black;
`;

// ✅ use the isEven prop in this component to change the background color for even rows!
const ListItem = styled.li`
  padding: 0.25rem 1rem;
  background: ${ props => props.isEven ? "aliceblue" : "white" };
  background: ${ props => props.divisibleByThreeAndFive ? "blueviolet" : props.divisibleByThree ? "blue" : props.divisibleByFive ? "violet" : "white" };
`;

// const items = ["Check", "Out", "This", "Great", "List"];
const items = [];
for (let i = 1; i < 100; i++) {
  items.push(i);
}

export default function List() {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem
          key={item}
          isEven={(index + 1) % 2 === 0}
          divisibleByThree={ !( ( index + 1 ) % 3 ) }
          divisibleByFive={ !( ( index + 1 ) % 5 ) }
          divisibleByThreeAndFive={ !( ( index + 1 ) % 3 ) && !( ( index + 1 ) % 5 ) }
        >
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}
