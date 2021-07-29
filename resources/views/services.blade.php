@extends('layouts.app')

@section('content')
<div class="row">
  <aside class="col-md-2 col-12">
    <div class="container">
        <div class="sidebarButtonSelected row">
            <div class="col">
                Новый заказ
            </div>
        </div>
        <div class="sidebarButton row">
            <div class="col">
                Сегодняшние записи
            </div>
        </div>
        <div class="row sidebarButton">
            <div class="col">
                Отчеты
            </div>
        </div>
        <div class="row sidebarButton">
            <div class="col">
                Управление
            </div>
        </div>
    </div>
  </aside>
  <div class="col-12 col-md-10" id="root1">
    <script src="{{ asset('js/services.js') }}" defer></script>
  </div>
</div>
@endsection
