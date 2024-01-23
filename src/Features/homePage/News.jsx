import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import { Link } from 'react-router-dom'
import { devicesMax } from '../../styles/BreakPoint'

const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentBox = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const ImgBox = styled.div`
  height: 20rem;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
`
const TextBox = styled.div`
  padding: 4rem 2rem;
`
const List = styled.div`
  flex: 1;
  box-shadow: var(--shadow-lg);
`
const StyledLink = styled(Link)`
  font-size: 2rem;
  color: var(--color-link);
`
const P = styled.p`
  padding: 2rem 0;
`
// const StyledMain = styled.main`
//   padding: 2rem;
//   grid-column: 1/7;
//   grid-row: 2/4;

//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 10px;

//   @media ${devicesMax.md} {
//     grid-column: 1/-1;
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media ${devicesMax.sm} {
//     grid-template-columns: 1fr;
//   }
// `

const dataList = [
  {
    image: '../../../tolo90.jpeg',
    heading: 'Hijab Project football tournament',
    link: 'Hijab-Project-football-tournament',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
  },
  {
    image: '../../../tolo2.jpeg',
    heading: 'Toloba Sports Consult collaborates',
    link: 'Toloba-Sports-Consult-collaborates',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
  },
  {
    image: '../../../tolo88.jpeg',
    heading: 'Ghanaian Entrepreneur Musah Toloba',
    link: 'Ghanaian-Entrepreneur-Musah-Toloba',

    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
  },
  {
    image: '../../../tolo22.jpeg',
    heading: 'Hijab Project football tournament',
    link: 'Hijab-Project-football-tournament',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
  },
  {
    image: '../../../tolo55.jpeg',
    heading: 'Toloba Sports Consult collaborates',
    link: 'Toloba-Sports-Consult-collaborates',

    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
  },
  {
    image: '../../../tolo95.jpeg',
    heading: 'Ghanaian Entrepreneur Musah Toloba',
    link: 'Ghanaian-Entrepreneur-Musah-Toloba',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
  },
]

function News() {
  return (
    <>
      <Section type="news">
        <Header>
          <Heading as="h4">news and blogs</Heading>
          <p>UPDATES</p>
        </Header>
        <ContentBox>
          {dataList.map((data) => (
            <List key={data.heading}>
              <ImgBox background={data.image}></ImgBox>
              <TextBox>
                <StyledLink to={`/blog-news/newspage/${data.link}`}>
                  <Heading as="h5">{data.heading}</Heading>
                </StyledLink>
                <P>{data.msg}</P>
              </TextBox>
            </List>
          ))}
        </ContentBox>
      </Section>
    </>
  )
}

export default News
