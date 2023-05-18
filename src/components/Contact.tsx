'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/Button'

const schema = z.object({
  name: z.string().nonempty('Insira seu nome'),
  email: z.string().email('Insira um email válido'),
  title: z.string().nonempty('Insira um titulo'),
  message: z.string().nonempty('Insira uma mensagem'),
})

type MessageData = z.infer<typeof schema>

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors, isSubmitSuccessful },
  } = useForm<MessageData>({
    resolver: zodResolver(schema),
  })

  const handleSendMessage = async (message: MessageData) => {
    resetForm()
  }

  return (
    <div className="grid grid-cols-6 gap-5">
      <div className="col-span-full md:col-span-2">
        {!isSubmitSuccessful && (
          <>
            <h1 className="text-2xl font-bold text-gray-600">
              Não conseguiu me encontrar em nenhuma rede social 😯?
            </h1>
            <p className="mt-4 text-gray-400">
              Não tem problema, você pode entrar em contato comigo através do
              formulário ao lado.
            </p>
          </>
        )}

        {isSubmitSuccessful && (
          <>
            <h1 className="text-2xl font-bold text-gray-600">
              Que bom que você entrou em contato comigo! 😄
            </h1>
            <p className="mt-4 text-green-400 font-bold">
              Agora é só aguardar que eu irei te responder o mais rápido
              possível 😉
            </p>
          </>
        )}
      </div>

      <div className="col-span-full md:col-span-4">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col gap-1">
              <input
                {...register('name')}
                type="text"
                placeholder="Digite seu nome"
                className="w-full rounded-full px-5 py-5"
              />

              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <input
                {...register('email')}
                placeholder="Digite seu email"
                className="w-full rounded-full px-5 py-5"
              />

              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register('title')}
              placeholder="Digite o titulo da mensagem"
              type="text"
              className="w-full rounded-full px-5 py-5"
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              {...register('message')}
              placeholder="Digite sua mensagem"
              rows={5}
              className="w-full rounded-3xl px-5 py-5"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          <div>
            <Button type="submit" text="Enviar mensagem" />
          </div>
        </form>
      </div>
    </div>
  )
}
