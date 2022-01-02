0-1. 시작 네스트 cli 설치
cmd: npm i -g @nestjs/cli

0-2. 프로젝트 설치
cmd: nest new project-name

0-3. 깃 레포지토리 생성
explorer https://github/new 
{{hi-nest}}

0-4. 깃 추가
cmd: git remote add https://github.com/misookhe/hi-nest

0-5. 깃 커밋-푸쉬


1-1. 서버시작
cmd : nest start:dev

1-2. 구조
src/main.ts : await.NestFactory.create(AppModule); await app.listen(3000);
src/app.module.ts : @Module( { controller: [xxxController], provider: [xxxService]})

src/xxx.controller.ts : 라우터 구성
@Controller() @Get(), @Post(), @Delete(), @Put(), @Patch(),

src/xxx.service.ts : 함수 집합

main - module - controller - service

1-3. 용어설명
@ 데코레이터

2-1. cli 자동생성
cmd: nest generate controller (= nest g co)
cmd q( 어떤 컨트롤러만들꺼임?) : movies

2-2. 컨트롤러 라우트 만들기
MoviesController.ts
@Get()
getAll(){
    return '~~';
}

@Get("/:id")
getOne(){
    return '~~';
}

@Get("/:id")
getOne(@Param('id') id: string){
    return `~~ : ${id}`;
}

@Get("/search")
getOne(@Query('year') searchingYear: string){
    return `~~ : ${searchingYear}`;
}

@Post()
create(@Body() movieData){ //타입없음
    console.log(movieData);
    return '~~';
}

@Delete('/:id')
remove(@Param('id') movieId: string){
    return `~~ : ${movieId}`;
}

@Patch("/:id")
patch(@Param() movieId: string, @Body() updateData){ //타입없음
    return{
        updataedMovie : movieId,
        ...updateData
    }
}

2-3 데코레이터 정리
@Param : 주소 라우팅에 있는 데이터
@Body  : document.body를 뜻함 // 타입없음
@Query : QueryString 