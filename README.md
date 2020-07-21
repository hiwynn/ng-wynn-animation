# Angular Animation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## 使用 ng-wynn-animation

1. 在项目中引入文件 `/src/app/ng-wynn-animation`，置于路径 `/src/app/` 下
2. 在 `AppModule`中 引入模块 `NgWynnAnimationModule`
3. 在 `AppComponent` 的 `styleUrls` 中引入 `src/app/ng-wynn-animation/ng-wynn-animation.css`;
4. 在任何想使用动画的地方加上动画的属性型指令名称和时间（毫秒）就能实现动画：
 ```
    <div class="item" [scaleShow]="500">item 1</div>
    <div class="item" [scaleShow]="600">item 2</div>
    <div class="item" [scaleShow]="700">item 3</div>
```

### 动画的指令名称:

动画|指令名称
:-|:-
Scale |scaleShow
Rotate |rotateShow
Fall |fallShow
