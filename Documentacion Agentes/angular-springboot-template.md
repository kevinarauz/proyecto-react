# 🚀 Angular + Spring Boot Template - Enterprise Configuration

**Fecha**: 2025-09-08  
**Framework Version**: 1.0.0  
**Tier**: 2 (BALANCED) - 3 (ENTERPRISE)  
**Stack**: Angular 17+ + Spring Boot 3+ + Microservices  

## 🎯 Configuration Matrix para Angular + Spring Boot

### **TIER 2 - BALANCED (Medium Projects)**
**Ideal para**: Business applications, single team, production apps  
**Team Size**: 4-15 developers  
**Complexity**: Moderate enterprise features  

```yaml
agents: 7 especializados
technologies: [Angular 17+, Spring Boot 3+, PostgreSQL, Redis]
architecture: Modular monolith + some microservices
team_structure: Single team con specialists
```

**Agentes Configuration**:
```bash
@agent-arq-pro     # System architecture + performance + infrastructure decisions
@agent-angular     # Frontend architecture + Angular patterns + UI/UX
@agent-springboot  # Backend APIs + business logic + Spring ecosystem
@agent-dba         # Database design + optimization + data modeling  
@agent-qa          # Testing strategy + automation + quality gates
@agent-coord       # Team coordination + workflows + delivery
@agent-solver      # Research + problem solving + innovation
```

### **TIER 3 - ENTERPRISE (Large Projects)**
**Ideal para**: Enterprise solutions, multiple teams, compliance-critical  
**Team Size**: 15+ developers, multiple squads  
**Complexity**: Distributed systems, high scalability, compliance  

```yaml
agents: 12 especializados
technologies: [Angular, Spring Boot, Microservices, Kafka, K8s]
architecture: Full microservices + micro-frontends
team_structure: Multiple teams + platform team
```

**Agentes Configuration**:
```bash
@agent-arq-enterprise    # Distributed architecture + technical leadership
@agent-angular-lead      # Frontend architecture + micro-frontends + teams
@agent-springboot-lead   # Microservices + distributed patterns + platform
@agent-dba-senior        # Database architecture + data governance
@agent-devops            # CI/CD + K8s + monitoring + infrastructure  
@agent-qa-lead           # Testing automation + compliance + quality engineering
@agent-security          # Security architecture + compliance + auditing
@agent-product           # Requirements + stakeholders + roadmap
@agent-coord-lead        # Multi-team coordination + program management
@agent-performance       # Performance engineering + SLAs + optimization
@agent-integration       # System integration + external APIs + event streaming
@agent-solver-pro        # Complex research + innovation + technical leadership
```

## 🎨 Angular-Specific Agent Templates

### **@agent-angular (TIER 2) - Frontend Architecture**

```yaml
---
name: angular
tier: 2
technologies: [angular, typescript, scss, jest]
version: 1.0.0
---

**Rol**: Angular Frontend Architect
**Scope**: Angular application architecture, component design, state management, performance

## 🎯 Angular-Specific Expertise

### **Architecture Patterns**
- **Module Federation**: Micro-frontends architecture y module sharing
- **Standalone Components**: New Angular patterns y component-first approach  
- **Signals**: Reactive programming con Angular Signals
- **Dependency Injection**: Advanced DI patterns y provider strategies
- **Change Detection**: OnPush strategies y performance optimization

### **UI/UX Specialization**
- **Angular Material**: Component customization y theming strategies
- **CDK**: Custom component development con Angular CDK
- **Responsive Design**: Angular Flex Layout y CSS Grid patterns
- **Accessibility**: Angular a11y compliance y screen reader optimization
- **PWA**: Progressive Web App implementation con Angular Service Worker

### **State Management**
- **NgRx**: Store patterns, effects, selectors, entity management
- **RxJS**: Reactive patterns, operators optimization, memory leak prevention
- **Signal Store**: New state management patterns con Angular Signals
- **Form Management**: Reactive forms, dynamic forms, validation strategies

### **Performance Optimization**
- **Lazy Loading**: Route-based y component-based lazy loading
- **OnPush Strategy**: Change detection optimization
- **TrackBy Functions**: NgFor performance optimization  
- **Bundle Analysis**: Webpack bundle analyzer y code splitting
- **Core Web Vitals**: Angular-specific performance metrics

## 📋 Entregables Angular

### **1. Application Architecture**
- Angular application structure y folder organization
- Module federation setup para micro-frontends (si aplica)
- Routing strategy y lazy loading implementation
- Dependency injection configuration y providers setup

### **2. Component Design System**
- Angular Material theme customization
- Shared component library con Storybook
- Design tokens implementation
- Component composition patterns

### **3. State Management Strategy**
- NgRx store architecture (si complex state)
- RxJS patterns y best practices
- Form management strategy
- Caching y data synchronization patterns

### **4. Performance Optimization**
- Change detection strategy optimization
- Bundle size optimization y code splitting
- Runtime performance monitoring setup
- Core Web Vitals improvement plan

### **5. Testing Strategy**
- Unit testing con Jest y Angular Testing Utilities
- Component testing con Angular Testing Library
- E2E testing con Cypress o Playwright
- Visual regression testing setup

## 🔄 Handoffs

**← Recibe de**:
- **@agent-arq-pro**: Technical constraints, performance budgets, architecture decisions
- **@agent-springboot**: API contracts, authentication flows, integration requirements

**→ Entrega a**:
- **@agent-qa**: Frontend testing requirements, component specifications
- **@agent-springboot**: Frontend requirements, API needs, authentication flows
- **@agent-coord**: Resource requirements, timeline dependencies, team needs
```

### **@agent-springboot (TIER 2) - Backend Architecture**

```yaml
---
name: springboot
tier: 2
technologies: [spring-boot, java, maven, postgresql]
version: 1.0.0  
---

**Rol**: Spring Boot Backend Architect
**Scope**: Spring Boot application architecture, API design, business logic, integrations

## 🎯 Spring Boot-Specific Expertise

### **Architecture Patterns**
- **Microservices**: Service decomposition, communication patterns, data management
- **Hexagonal Architecture**: Ports y adapters pattern implementation
- **CQRS**: Command Query Responsibility Segregation patterns
- **Event Sourcing**: Event-driven architecture con Spring Events
- **Domain-Driven Design**: Bounded contexts, aggregates, repositories

### **API Design**  
- **REST APIs**: RESTful design, HATEOAS, API versioning strategies
- **GraphQL**: Schema design, resolvers, performance optimization
- **OpenAPI**: Documentation automation, contract-first development
- **Security**: OAuth2, JWT, Spring Security configuration
- **Error Handling**: Consistent error responses, exception handling strategies

### **Data Management**
- **Spring Data JPA**: Repository patterns, query optimization, transactions
- **Database Migrations**: Flyway/Liquibase setup y versioning strategy  
- **Caching**: Redis integration, cache strategies, cache invalidation
- **Event Streaming**: Kafka integration para event-driven architecture
- **Data Validation**: Bean Validation, custom validators

### **Spring Ecosystem Integration**
- **Spring Cloud**: Service discovery, configuration management, circuit breakers
- **Spring Boot Actuator**: Health checks, metrics, monitoring endpoints
- **Spring Security**: Authentication, authorization, method-level security
- **Spring Integration**: Message-driven architectures, enterprise integration patterns
- **Spring Batch**: Batch processing, scheduled jobs, data processing

## 📋 Entregables Spring Boot

### **1. Application Architecture**
- Spring Boot application structure y package organization
- Configuration management con Spring Cloud Config (si aplica)
- Service layer design y business logic organization
- Integration patterns con external systems

### **2. API Design**
- RESTful API design con consistent patterns
- OpenAPI documentation y contract-first approach
- Error handling strategy y standardized responses
- API versioning strategy y backward compatibility

### **3. Data Layer Design**
- Repository patterns y data access layer
- Database schema design y migration strategy  
- Caching strategy con Redis (si needed)
- Transaction management y data consistency patterns

### **4. Security Implementation**
- Authentication y authorization strategy
- JWT token management y refresh patterns
- Method-level security configuration
- CORS configuration para Angular integration

### **5. Integration & Communication**
- Service-to-service communication patterns
- Event-driven architecture con Spring Events/Kafka
- External API integration patterns
- Message queue integration (RabbitMQ/Kafka)

## 🔄 Handoffs

**← Recibe de**:
- **@agent-arq-pro**: System architecture, performance requirements, infrastructure constraints
- **@agent-angular**: API requirements, authentication needs, integration specifications
- **@agent-dba**: Database design, query optimization recommendations

**→ Entrega a**:
- **@agent-angular**: API contracts, authentication flows, error handling patterns
- **@agent-dba**: Data requirements, query patterns, performance needs
- **@agent-qa**: API testing requirements, integration testing specifications
```

## 🏗️ Integration Patterns Angular + Spring Boot

### **Authentication Flow**
```typescript
// Angular Service
@Injectable()
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  
  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/login', credentials)
      .pipe(
        tap(response => {
          this.tokenSubject.next(response.accessToken);
          this.storage.setItem('refreshToken', response.refreshToken);
        })
      );
  }
}
```

```java
// Spring Boot Controller
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        AuthResponse response = authService.authenticate(request);
        return ResponseEntity.ok(response);
    }
}
```

### **Error Handling Strategy**
```typescript
// Angular Error Interceptor
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error?.code) {
          return throwError(() => new ApiError(error.error));
        }
        return throwError(() => error);
      })
    );
  }
}
```

```java
// Spring Boot Exception Handler
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ErrorResponse> handleValidation(ValidationException ex) {
        ErrorResponse error = ErrorResponse.builder()
            .code("VALIDATION_ERROR")
            .message(ex.getMessage())
            .timestamp(Instant.now())
            .build();
        return ResponseEntity.badRequest().body(error);
    }
}
```

### **State Management Integration**
```typescript
// Angular NgRx Effects
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );
}
```

```java
// Spring Boot Service
@Service
@Transactional(readOnly = true)
public class UserService {
    
    public Page<UserDto> getUsers(Pageable pageable) {
        return userRepository.findAll(pageable)
            .map(userMapper::toDto);
    }
}
```

## 📊 Performance Optimization Strategies

### **Angular Performance**
```typescript
// OnPush Strategy
@Component({
  selector: 'app-user-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-user-card 
      *ngFor="let user of users; trackBy: trackByUserId"
      [user]="user">
    </app-user-card>
  `
})
export class UserListComponent {
  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}

// Lazy Loading
const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];
```

### **Spring Boot Performance**
```java
// Caching Strategy
@Service
public class UserService {
    
    @Cacheable(value = "users", key = "#id")
    public UserDto getUserById(Long id) {
        return userRepository.findById(id)
            .map(userMapper::toDto)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    @CacheEvict(value = "users", key = "#userDto.id")
    public UserDto updateUser(UserDto userDto) {
        // Update logic
    }
}

// Database Query Optimization
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT u FROM User u LEFT JOIN FETCH u.roles WHERE u.active = true")
    List<User> findActiveUsersWithRoles();
    
    @EntityGraph(attributePaths = {"roles", "department"})
    Optional<User> findByEmail(String email);
}
```

## 🔧 Development Workflow Integration

### **Local Development Setup**
```yaml
# docker-compose.dev.yml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp_dev
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev123
    ports:
      - "5432:5432"
      
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
      
  angular:
    build: ./frontend
    ports:
      - "4200:4200"
    volumes:
      - ./frontend:/app
      
  springboot:
    build: ./backend
    ports:
      - "8080:8080"
    depends_on:
      - postgres
      - redis
```

### **CI/CD Pipeline Integration**
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline
on: [push, pull_request]

jobs:
  frontend-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
        working-directory: ./frontend
      - name: Run tests
        run: npm run test:ci
        working-directory: ./frontend
      - name: Build
        run: npm run build:prod
        working-directory: ./frontend
        
  backend-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Java
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
      - name: Run tests
        run: ./mvnw clean test
        working-directory: ./backend
      - name: Build
        run: ./mvnw clean package -DskipTests
        working-directory: ./backend
```

## 📋 Migration Checklist desde React LEAN

### **Phase 1: Framework Adaptation**
- [ ] Crear Angular-specific agent templates
- [ ] Adaptar Spring Boot agent templates  
- [ ] Configure tier detection para Angular + Spring Boot
- [ ] Test agents con proyecto Angular existente

### **Phase 2: Team Integration**
- [ ] Team training en nuevos agents y workflows
- [ ] Establish coding standards y best practices
- [ ] Configure development environment automation
- [ ] Setup monitoring y metrics collection

### **Phase 3: Production Readiness**
- [ ] Security hardening y compliance validation
- [ ] Performance optimization y load testing
- [ ] Documentation completa y knowledge transfer
- [ ] Establish maintenance y evolution processes

---

## 🎯 Success Metrics para Angular + Spring Boot

### **Development Efficiency**
- **Feature delivery time**: Target 40% reduction vs traditional approach
- **Code quality consistency**: >90% adherence to established patterns
- **Bug reduction**: Target 30% fewer production bugs
- **Developer onboarding**: <2 weeks para new team members

### **Technical Metrics**  
- **Angular bundle size**: <2MB initial bundle, <500KB per lazy route
- **Spring Boot startup time**: <30 seconds en development, <15 seconds en production
- **API response time**: 95th percentile <200ms para critical endpoints
- **Test coverage**: >80% unit tests, >70% integration tests

### **Team Collaboration**
- **Cross-functional efficiency**: Frontend-backend integration time <2 days
- **Knowledge sharing**: All architectural decisions documented y accessible
- **Code review efficiency**: Average review time <4 hours
- **Deployment confidence**: >95% successful deployments sin rollback

**Este template permite aprovechar todo el learning del sistema LEAN aplicándolo a tu stack enterprise Angular + Spring Boot con patterns específicos y optimizaciones para desarrollo en equipo.**