import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, Heart } from "lucide-react"

export default function ElViajeDeLucia() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Libritos Gigantes Logo" width={50} height={50} className="h-12 w-auto" />
            <div className="hidden md:block">
              <span className="font-bold text-lg text-navy block">Érase una vez,</span>
              <span className="font-bold text-lg text-navy block -mt-1">Libritos Gigantes</span>
            </div>
          </Link>

          <Button className="bg-pink hover:bg-pink/90 text-white rounded-full px-6">Donar</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/#cuentos" className="inline-flex items-center text-teal hover:text-teal-dark transition-colors">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Volver a cuentos
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">El Viaje de Lucía</h1>
            <p className="text-lg text-navy/70 italic">
              Acompaña a Lucía en su aventura para descubrir el valor de la honestidad
            </p>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/el-viaje-de-lucia.png"
              alt="El Viaje de Lucía"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Lucía encontró una billetera en el parque mientras paseaba en bicicleta. Tenía dinero, una tarjeta y una
              foto de un perro muy simpático.
            </p>

            <p>
              Por un instante, pensó en guardarla, pero algo en su corazón le dijo que no era correcto. Caminó hasta la
              estación de policía y la entregó.
            </p>

            <p>Esa tarde, un señor mayor llegó a su casa con su perro —el mismo de la foto— y una gran sonrisa.</p>

            <p>—Gracias, Lucía. Lo que hiciste vale más que todo el dinero —le dijo.</p>

            <p>
              Lucía entendió que decir la verdad y hacer lo correcto es un viaje que siempre te lleva a buen destino.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-teal hover:bg-teal/90 text-white rounded-full py-6 px-8 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Descargar PDF
            </Button>
            <Button
              variant="outline"
              className="border-pink text-pink hover:bg-pink-light rounded-full py-6 px-8 text-lg"
            >
              <Heart className="mr-2 h-5 w-5" />
              Guardar como favorito
            </Button>
          </div>

          <div className="bg-teal-light/30 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Reflexión</h2>
            <p className="text-navy/80 mb-4">
              Este cuento nos enseña sobre la honestidad y la importancia de hacer lo correcto, incluso cuando nadie nos
              está viendo.
            </p>
            <p className="text-navy/80">
              La historia de Lucía nos muestra que las decisiones honestas no solo nos hacen sentir bien con nosotros
              mismos, sino que también pueden tener un impacto positivo en la vida de los demás.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-navy mb-4">¿Te gustó esta historia?</h3>
            <p className="text-navy/70 mb-6">
              Comparte tus pensamientos o dibuja tu propia versión de El Viaje de Lucía y envíanosla.
            </p>
            <Link href="/#participa">
              <Button className="bg-pink hover:bg-pink/90 text-white rounded-full px-8 py-4">Participar</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-navy text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Libritos Gigantes Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto mr-3"
                />
                <h3 className="text-xl font-bold">Érase una vez, Libritos Gigantes</h3>
              </div>
              <p className="text-teal-light">
                Promoviendo la lectura y los valores a través de historias mágicas para niños y niñas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#inicio" className="text-teal-light hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#cuentos" className="text-teal-light hover:text-white">
                    Cuentos
                  </Link>
                </li>
                <li>
                  <Link href="/#participa" className="text-teal-light hover:text-white">
                    Participa
                  </Link>
                </li>
                <li>
                  <Link href="/#encuesta" className="text-teal-light hover:text-white">
                    Encuesta
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="text-teal-light">
                info@libritosgigantes.org
                <br />
                Tel: (123) 456-7890
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social Media Icons */}
                <Link href="#" className="text-white hover:text-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-pink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-teal mt-8 pt-8 text-center text-teal-light">
            <p>&copy; {new Date().getFullYear()} Érase una vez, Libritos Gigantes. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
