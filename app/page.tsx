import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BookOpen, Upload, FileText, Heart, ChevronRight, Download } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Libritos Gigantes Logo" width={50} height={50} className="h-12 w-auto" />
            <div className="hidden md:block">
              <span className="font-bold text-lg text-navy block">Érase una vez,</span>
              <span className="font-bold text-lg text-navy block -mt-1">Libritos Gigantes</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#inicio" className="text-navy hover:text-teal font-medium">
              Inicio
            </Link>
            <Link href="#cuentos" className="text-navy hover:text-teal font-medium">
              Cuentos
            </Link>
            <Link href="#participa" className="text-navy hover:text-teal font-medium">
              Participa
            </Link>
            <Link href="#encuesta" className="text-navy hover:text-teal font-medium">
              Encuesta
            </Link>
            <Button className="bg-pink hover:bg-pink/90 text-white rounded-full px-6">Donar</Button>
          </nav>

          <Button variant="ghost" className="md:hidden p-2">
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
              className="text-navy"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="inicio" className="py-16 bg-gradient-to-b from-teal-light to-pink-light">
          <div className="container mx-auto px-4 text-center">
            <Image src="/logo.png" alt="Libritos Gigantes Logo" width={300} height={300} className="mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Bienvenidos a Libritos Gigantes</h1>
            <p className="text-xl md:text-2xl text-navy max-w-3xl mx-auto mb-8">
              "Una semilla, un futuro de luz... creciendo juntos hacia un mundo mejor"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-teal hover:bg-teal/90 text-white rounded-full px-8 py-6 text-lg">
                Descubre nuestros cuentos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-pink text-pink hover:bg-pink-light rounded-full px-8 py-6 text-lg"
              >
                Participa
              </Button>
            </div>
          </div>
        </section>

        {/* Cuentos Section */}
        <section id="cuentos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Nuestros Cuentos</h2>
              <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                Descubre historias mágicas llenas de valores y enseñanzas para los más pequeños
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "El Árbol Generoso",
                  summary: "Un cuento sobre la importancia de compartir y cuidar la naturaleza.",
                  image: "/images/el-arbol-generoso.png",
                  link: "/cuento/el-arbol-generoso",
                },
                {
                  title: "La Tortuga y las Estrellas",
                  summary: "Una historia de perseverancia y amistad bajo el cielo estrellado.",
                  image: "/images/la-tortuga-y-las-estrellas.png",
                  link: "/cuento/la-tortuga-y-las-estrellas",
                },
                {
                  title: "El Viaje de Lucía",
                  summary: "Acompaña a Lucía en su aventura para descubrir el valor de la honestidad.",
                  image: "/images/el-viaje-de-lucia.png",
                  link: "/cuento/el-viaje-de-lucia",
                },
                {
                  title: "Amigos del Bosque",
                  summary: "Una historia sobre la importancia de la amistad y el trabajo en equipo.",
                  image: "/images/amigos-del-bosque.png",
                  link: "/cuento/amigos-del-bosque",
                },
                {
                  title: "El Pequeño Inventor",
                  summary: "Descubre cómo la creatividad puede cambiar el mundo que nos rodea.",
                  image: "/images/el-pequeno-inventor.png",
                  link: "/cuento/el-pequeno-inventor",
                },
              ].map((cuento, index) => (
                <div
                  key={index}
                  className="bg-teal-light/30 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cuento.image || "/placeholder.svg"}
                      alt={cuento.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{cuento.title}</h3>
                    <p className="text-navy/70 mb-4">{cuento.summary}</p>
                    <div className="flex space-x-2">
                      <Button className="bg-teal hover:bg-teal/90 text-white rounded-full" asChild={!!cuento.link}>
                        {cuento.link ? (
                          <Link href={cuento.link}>
                            <BookOpen className="mr-2 h-4 w-4" />
                            Leer
                          </Link>
                        ) : (
                          <>
                            <BookOpen className="mr-2 h-4 w-4" />
                            Leer
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="border-teal text-teal hover:bg-teal-light/50 rounded-full">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar PDF
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Participa Section */}
        <section id="participa" className="py-16 bg-teal-light/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Participa</h2>
              <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                ¿Tienes una historia o ilustración que quieres compartir? ¡Envíanosla y podrías verla publicada!
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy font-medium">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      className="rounded-lg border-[#BDBDBD] focus:border-teal focus:ring-teal"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-medium">
                      Correo electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="rounded-lg border-[#BDBDBD] focus:border-teal focus:ring-teal"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-navy font-medium">
                    Título de tu historia
                  </Label>
                  <Input
                    id="title"
                    placeholder="Título de tu cuento o ilustración"
                    className="rounded-lg border-[#BDBDBD] focus:border-teal focus:ring-teal"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-navy font-medium">
                    Descripción
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Cuéntanos un poco sobre tu historia..."
                    className="rounded-lg border-[#BDBDBD] focus:border-teal focus:ring-teal min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file" className="text-navy font-medium">
                    Sube tu archivo
                  </Label>
                  <div className="border-2 border-dashed border-[#BDBDBD] rounded-lg p-8 text-center hover:border-teal transition-colors duration-300">
                    <Upload className="mx-auto h-12 w-12 text-[#9E9E9E]" />
                    <p className="mt-2 text-sm text-navy/70">
                      Arrastra y suelta tu archivo aquí, o{" "}
                      <span className="text-teal font-medium">busca en tu dispositivo</span>
                    </p>
                    <p className="mt-1 text-xs text-navy/50">
                      Formatos aceptados: PDF, DOC, DOCX, JPG, PNG (máx. 10MB)
                    </p>
                    <Input id="file" type="file" className="hidden" />
                  </div>
                </div>

                <Button className="w-full bg-teal hover:bg-teal/90 text-white rounded-full py-6 text-lg">
                  <FileText className="mr-2 h-5 w-5" />
                  Enviar mi historia
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Encuesta Section */}
        <section id="encuesta" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy mb-4">Tu opinión nos importa</h2>
              <p className="text-lg text-navy/70 mb-8">
                Ayúdanos a mejorar respondiendo nuestra breve encuesta de satisfacción. ¡Tu feedback es muy valioso!
              </p>
              <Button className="bg-pink hover:bg-pink/90 text-white rounded-full px-8 py-6 text-lg">
                Responder encuesta
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 bg-pink-light/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-navy mb-4">Apoya nuestro proyecto</h2>
                  <p className="text-navy/70 mb-6">
                    Tu donación nos ayuda a seguir creando historias mágicas y a llevarlas a más niños y niñas.
                  </p>
                  <Button className="bg-pink hover:bg-pink/90 text-white rounded-full py-6 text-lg shadow-md">
                    <Heart className="mr-2 h-5 w-5" />
                    Donar ahora
                  </Button>
                </div>
                <div className="md:w-1/2 bg-teal-light/30 p-8 md:p-12 flex items-center justify-center">
                  <Image
                    src="/images/apoya-proyecto.png"
                    alt="Apoya nuestro proyecto"
                    width={300}
                    height={400}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white py-12">
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
                  <Link href="#inicio" className="text-teal-light hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#cuentos" className="text-teal-light hover:text-white">
                    Cuentos
                  </Link>
                </li>
                <li>
                  <Link href="#participa" className="text-teal-light hover:text-white">
                    Participa
                  </Link>
                </li>
                <li>
                  <Link href="#encuesta" className="text-teal-light hover:text-white">
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
