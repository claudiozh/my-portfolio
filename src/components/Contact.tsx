import { Button } from '@/components/Button'

export const Contact = () => {
  const styleInput = 'w-full rounded-full px-5 py-5'
  const styleTextArea = 'w-full rounded-3xl px-5 py-5'

  return (
    <div className="grid grid-cols-6 gap-5 mt-12">
      <div className="col-span-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-600">
            Não gosta de formulários? Envie-me um email. 👋
          </h1>
          <p className="text-gray-400 mt-4">
            Você pode enviar um email diretamente para
            <span className="ml-1 font-bold">
              <a
                href="mailto:claudiorodrigozh@gmail.com"
                className="text-red-500"
              >
                email
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="col-span-4">
        <form className="flex flex-col gap-5 ">
          <div className="flex gap-5">
            <input type="text" placeholder="Seu nome" className={styleInput} />
            <input type="email" placeholder="Email" className={styleInput} />
          </div>

          <div className="flex flex-col gap-5">
            <input type="text" placeholder="Subtítulo" className={styleInput} />
          </div>

          <div className="flex flex-col gap-5">
            <textarea
              placeholder="Mensagem"
              rows={5}
              className={styleTextArea}
            />
          </div>

          <div>
            <Button text="Enviar mensagem" />
          </div>
        </form>
      </div>
    </div>
  )
}
