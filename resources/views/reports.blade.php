@extends('layouts.app')

@section('content')
<div class="row">
  <aside class="col-md-2 col-12">
    <div class="container">
        <div class="sidebarButton row">
            <div class="col">
                Новый заказ
            </div>
        </div>
        <div class="sidebarButton row">
            <div class="col">
                Сегодняшние записи
            </div>
        </div>
        <div class="row sidebarButtonSelected">
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
  <div class="col-12 col-md-10">
    <script src="{{ asset('js/reports.js') }}" defer></script>
  </div>
</div>
@endsection
