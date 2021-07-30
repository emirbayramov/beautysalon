@extends('layouts.app')

@section('content')
<div class="row">
  <aside class="col-md-2 col-12">
    <div class="container">
        <div class="sidebarButton row">
            <div class="col">
                <a href="/services">Новый заказ</a>
            </div>
        </div>
        <div class="sidebarButton row">
            <div class="col">
              <a href="/list">Сегодняшние записи</a>
            </div>
        </div>
        <div class="row sidebarButton">
            <div class="col">
                <a href="/reports">Отчеты</a>
            </div>
        </div>
        <div class="row sidebarButtonSelected">
            <div class="col">
                Управление
            </div>
        </div>
    </div>
  </aside>
  <div class="col-12 col-md-10" id="root1">
    <script src="{{ asset('js/settings.js') }}" defer></script>
  </div>
</div>
@endsection
