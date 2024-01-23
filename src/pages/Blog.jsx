import Header from '../ui/Header'
import styled from 'styled-components'

import Main from '../ui/Main'
import SideNews from '../Features/Blog/SideNews'
import TopNews from '../Features/Blog/TopNews'
import { Outlet } from 'react-router-dom'

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

const NewsLayout = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 5px;
`

function Blog() {
  const currentNews = dataList[0]
  const { heading, image, link } = currentNews
  return (
    <>
      <Header src="../../tolo88.jpeg" name="News and Updates" />
      <Main>
        <NewsLayout>
          <TopNews heading={heading} image={image} link={link} />
          <SideNews />
          <Outlet />
        </NewsLayout>
      </Main>
    </>
  )
}

export default Blog
