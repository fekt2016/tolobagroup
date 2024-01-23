import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import BlogMain from '../../ui/BlogMain'
import { Link } from 'react-router-dom'

const dataList = [
  {
    image: '../../../tolo90.jpeg',
    heading: 'Hijab Project football tournament',
    link: 'Hijab-Project-football-tournament',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo2.jpeg',
    heading: 'Toloba Sports Consult collaborates',
    link: 'Toloba-Sports-Consult-collaborates',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo88.jpeg',
    heading: 'Ghanaian Entrepreneur Musah Toloba',
    link: 'Ghanaian-Entrepreneur-Musah-Toloba',

    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo22.jpeg',
    heading: 'Hijab Project football tournament',
    link: 'Hijab-Project-football-tournament',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo55.jpeg',
    heading: 'Toloba Sports Consult collaborates',
    link: 'Toloba-Sports-Consult-collaborates',

    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo95.jpeg',
    heading: 'Ghanaian Entrepreneur Musah Toloba',
    link: 'Ghanaian-Entrepreneur-Musah-Toloba',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo95.jpeg',
    heading: 'Ghanaian Entrepreneur Musah Toloba',
    link: 'Ghanaian-Entrepreneur-Musah-Toloba',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo95.jpeg',
    heading: 'Ghanaian Entrepreneur Musah Toloba',
    link: 'Ghanaian-Entrepreneur-Musah-Toloba',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
  {
    image: '../../../tolo95.jpeg',
    heading: 'Ghanaian Entrepreneur Musah Toloba',
    link: 'Ghanaian-Entrepreneur-Musah-Toloba',
    story:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
    sector: 'sport',
  },
]

const Card = styled.div`
  flex: 1;
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-lg);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`
const ImgBox = styled.div`
  width: 100%;
  height: 60%;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`
const TextBox = styled.div`
  height: 40%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-200);
  color: var(--color-primary-700);

  p {
    text-decoration: underline;

    @media ${devicesMax.md} {
      /* font-size: 1.3rem; */
    }
  }
  @media ${devicesMax.md} {
    padding: 0.5rem;
  }
`
const StyledLink = styled(Link)`
  cursor: pointer;
`
const StyledSector = styled.span`
  background-color: red;
  padding: 0.2rem 1.5rem;
  font-size: 1.2rem;
  align-self: start;
  margin-bottom: 1rem;
`

function BlogNews() {
  return (
    <BlogMain type="all">
      {dataList.map((item) => (
        <Card key={item.heading}>
          <ImgBox>
            <Img src={item.image} alt={item.heading} />
          </ImgBox>
          <TextBox>
            <StyledSector>{item.sector}</StyledSector>
            <StyledLink to={`/blog-news/newspage/${item.link}`}>
              <p>{item.heading}</p>
            </StyledLink>
          </TextBox>
        </Card>
      ))}
    </BlogMain>
  )
}

export default BlogNews
