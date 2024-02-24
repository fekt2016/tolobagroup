import Form from '../ui/Form'
import styled from 'styled-components'
import FormRow from '../ui/FormRow'
import Input from '../ui/Input'
import Heading from '../ui/Heading'
import FileInput from '../ui/FileInput'
import Textarea from '../ui/Textarea'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'
import { useCreateBlog } from '../Features/admin/useCreateBlog'

const StyledAdmin = styled.div`
  height: 100vh;

  display: flex;
  background-color: var(--color-grey-700);
`

function Admin() {
  const { register, handleSubmit, setValue, reset } = useForm()

  const { createBlog, isPending } = useCreateBlog()

  function onSubmit(data) {
    createBlog({
      ...data,
      image: data.image[0],
      pics: [...data.pics],
    })
    reset()
  }

  return (
    <StyledAdmin>
      <div>
        <Heading as="h3">add new blog post </Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="heading">
            <Input
              type="text"
              id="headind"
              {...register('heading', {
                required: 'heading is required',
                onChange: (e) => {
                  let head = e.target.value
                  head.toString()
                  const linkVal = head.split(' ').join('-')
                  setValue('link', linkVal)
                },
              })}
            />
          </FormRow>
          <FormRow label="short story">
            <Input
              type="text"
              {...register('short', {
                required: 'short is required',
              })}
            />
          </FormRow>
          <FormRow label="category">
            <Input
              id="category"
              {...register('category', {
                required: 'category is required',
              })}
            />
          </FormRow>
          <FormRow label="full story">
            <Textarea
              {...register('full', {
                required: 'full story is required',
              })}
            />
          </FormRow>

          <FormRow label="Image">
            <FileInput
              id="image"
              accept="image/*"
              {...register('image', {
                required: 'image is required',
              })}
            />
          </FormRow>
          <FormRow label="pictures">
            <FileInput
              id="pcs"
              accept="image/*"
              multiple
              {...register('pics')}
            />
          </FormRow>
          <Input
            type="hidden"
            id="link"
            {...register('link', {
              required: 'link is required',
            })}
          />
          <FormRow>
            <Button disabled={isPending}>
              {isPending ? <p>Loading...</p> : 'submit'}
            </Button>
          </FormRow>
        </Form>
      </div>
      <div>
        <Heading as="h3">list </Heading>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          commodi debitis doloremque ad reiciendis obcaecati maiores a optio
          perferendis animi quod, cum eaque consequuntur corporis sint sunt
          recusandae aut veniam voluptate aliquid amet at omnis provident.
          Facere consectetur id quam commodi ab ad quas. Magni similique sed
          officiis laudantium et. Quo deleniti aspernatur animi, error officiis
          dolore vitae. Fugiat provident est exercitationem quaerat officia
          omnis blanditiis aut consequuntur numquam? Facilis dolorum, vel nam
          dolor ducimus placeat consequatur in molestias quasi quidem numquam et
          deleniti voluptatum dignissimos dolores doloremque aut aliquid. Totam,
          alias reiciendis atque quisquam fugiat esse in voluptatum aliquam!
        </div>
      </div>
    </StyledAdmin>
  )
}

export default Admin
