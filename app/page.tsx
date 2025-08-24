import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Code, Coffee, ArrowRight, Github, Twitter, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Python Pará</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#eventos" className="text-muted-foreground hover:text-foreground transition-colors">
              Eventos
            </a>
            <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#comunidade" className="text-muted-foreground hover:text-foreground transition-colors">
              Comunidade
            </a>
            <Button>Participar</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bem-vindos ao Python Pará
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A comunidade Python do Pará! Junte-se a nós em dojos, meetups e live codings. Aprendemos juntos,
            compartilhamos conhecimento e ajudamos novos desenvolvedores a descobrir o poder do Python aqui no nosso
            estado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Participar da Comunidade
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Ver Próximos Eventos
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Membros Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Eventos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Gratuito e Aberto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section id="eventos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-xl text-muted-foreground">Participe dos nossos encontros e aprenda com a comunidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Dojo</Badge>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <CardTitle>Python Dojo: Algoritmos</CardTitle>
                <CardDescription>Sábado, 15 de Janeiro • 14:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Vamos resolver problemas de algoritmos juntos! Traga seu laptop e vamos codar.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>25 participantes confirmados</span>
                </div>
                <Button className="w-full">Confirmar Presença</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Meetup</Badge>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <CardTitle>Django para Iniciantes</CardTitle>
                <CardDescription>Quinta-feira, 20 de Janeiro • 19:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Workshop introdutório sobre Django. Ideal para quem está começando com web development.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>40 participantes confirmados</span>
                </div>
                <Button className="w-full">Confirmar Presença</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge>Live Coding</Badge>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <CardTitle>API REST com FastAPI</CardTitle>
                <CardDescription>Domingo, 25 de Janeiro • 16:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Live coding construindo uma API completa com FastAPI. Transmissão ao vivo no YouTube.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>Online • Gratuito</span>
                </div>
                <Button className="w-full">Assistir Live</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recursos para Aprender</h2>
            <p className="text-xl text-muted-foreground">Material curado pela comunidade para todos os níveis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tutoriais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Guias passo a passo para iniciantes e avançados</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Repositórios open source da comunidade</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Mentoria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Conecte-se com mentores experientes</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Fórum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tire dúvidas e compartilhe conhecimento</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nossa comunidade é aberta a todos! Não importa se você é iniciante ou experiente, há sempre algo novo para
            aprender e ensinar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Entrar no Discord
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Ver no GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold">Python Pará</h3>
              </div>
              <p className="text-muted-foreground">
                Construindo uma comunidade inclusiva e colaborativa para desenvolvedores Python no Pará.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Eventos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Dojos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Meetups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Live Codings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Workshops
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Tutoriais
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Mentoria
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Fórum
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Conecte-se</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Python Pará. Feito com ❤️ pela comunidade paraense.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
