import { useParams } from 'react-router-dom'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import BlogMain from '../ui/BlogMain'
import Spinner from '../ui/Spinner'
import { useBlog } from '../Features/admin/useBlog'

// const dataList = [
//   {
//     background: '../../../tolo22.jpeg',
//     heading: 'Hijab Project football tournament',
//     link: 'Hijab-Project-football-tournament',
//     msg:
//       ' Toloba Group Consult donate to participating schools of Hijab Project football tournament',
//     story:
//       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
//   },
//   {
//     background: '../../../tolo55.jpeg',
//     heading: 'Toloba Sports Consult collaborates',
//     link: 'Toloba-Sports-Consult-collaborates',
//     msg:
//       ' Toloba Sports Consult collaborates with Sports Minister for talent development',
//     story:
//       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
//   },
//   {
//     background: '../../../tolo88.jpeg',
//     heading: 'Ghanaian Entrepreneur Musah Toloba',
//     link: 'Ghanaian-Entrepreneur-Musah-Toloba',
//     msg:
//       'Ghanaian Entrepreneur Musah Toloba recognized for sports initiatives, receives collaboration offer from Turcaf President',
//     story:
//       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eni et eveniet deserunt dolorum veniam porro culpa similique corrupti magnam sit adipisci ipsa sed mollitia, reprehenderit provident esse beatae. Repellendus ea cumque in unde? Vitae totam praesentium dolore vero nam qui ea obcaecati sint quasi atque suscipit eaque impeditconsequatur ipsa et eveniet hic illo perferendis error sapiente ex,dolores cum repellendus? Eligendi labore officia autem consectetur repellat, eveniet, magni aliquid fugit, ducimus provident natus eosaut est doloremque vero praesentium? Odio mollitia ratione excepturi,temporibus aut voluptate similique nulla repellat earum pariaturmaiores sint, neque illum nam laboriosam nesciunt quia! Optio solutaquisquam, reprehenderit tempore eius quo quidem, amet voluptatum, sintut ad illo perferendis delectus ipsa molestias consectetur deseruntblanditiis repudiandae incidunt voluptatibus laudantium vel veniamexplicabo! Magnam molestias enim illo expedita officia ipsum velitomnis reiciendis aut quia eveniet sit ipsa necessitatibus facererepudiandae placeat nemo quaerat nostrum distinctio nobis possimuscorporis voluptas pariatur qui? Necessitatibus velit accusantium verdolorum odit aliquid, minus iste architecto, ea ipsa quasi molestiaatque, at cupiditate quo vitae fugit dolorem perferendis Reprehenderit architecto, rerum iusto optio consequatur inventore aillo assumenda iure impedit quidem? Enim ut ipsam quod exercitationelabore aperiam dolorum at repudiandae necessitatibus. Soluta autumquam non esse expedita incidunt officiis at magnam animi a, sequlaboriosam rerum temporibus.',
//   },
// ]

function NewsPage() {
  const { id } = useParams()
  const { isLoading, data: blogs } = useBlog()

  if (isLoading) return <Spinner />
  const currentNews = blogs?.find((el) => el.link === id)

  const { image, heading, full, pics } = currentNews
  console.log(pics)

  return (
    <BlogMain>
      <Section type="newspage">
        <div>
          <Heading as="h3">{heading}</Heading>
        </div>
        <img src={image} />
        <div>
          <p>{full}</p>
        </div>
        <ul>
          {pics?.map((pic) => (
            <li key={pic.index}>
              <img src={pic} alt={`pic-`} />
            </li>
          ))}
        </ul>
      </Section>
    </BlogMain>
  )
}

export default NewsPage
