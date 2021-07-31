@extends('layouts.app')

@section('content')
<div class="row">
  <aside class="col-md-2 col-12">
    <div class="container">
        <div class="sidebarButtonSelected row">
            <div class="col">
                New order
            </div>
        </div>
        <div class="sidebarButton row">
            <div class="col">
                <a href="/list">Orders</a>
            </div>
        </div>
        <div class="row sidebarButton">
            <div class="col">
                <a href="/reports">Reports</a>
            </div>
        </div>
        <div class="row sidebarButton">
            <div class="col">
                <a href="/settings">Settings</a>
            </div>
        </div>
    </div>
  </aside>
  <div class="col-12 col-md-10" id="root1">
    <script src="{{ asset('js/services.js') }}" defer></script>
  </div>
</div>
@endsection
