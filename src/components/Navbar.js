import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  margin: 0px 5px;
  font-size: 14px;
  cursor: pointer;
  
`
function Navbar() {
    return (
        <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>DESIGNER.</Logo>
          </Center>
          <Right>
           <Link to='/Register'><MenuItem>REGISTER</MenuItem></Link>
           <Link to='/LogIn'> <MenuItem>SIGN IN</MenuItem></Link>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <Link to='Cart'><ShoppingCartOutlined/></Link>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    )
}

export default Navbar
