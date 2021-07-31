@extends('layouts.app')

@section('content')
<div class="row">
  <aside class="col-md-2 col-12">
    <div class="container">
        <div class="sidebarButton row">
            <div class="col">
                <a href="/services">New order</a>
            </div>
        </div>
        <div class="sidebarButtonSelected row">
            <div class="col">
                Orders
            </div>
        </div>
        <div class="row sidebarButton">
            <div class="col">
                <a href="/report">Reports</a>
            </div>
        </div>
        <div class="row sidebarButton">
            <div class="col">
                <a href="/settings">Settings</a>
            </div>
        </div>
    </div>
  </aside>
  <div class="col-12 col-md-10 " id="root1">
   <script src="{{ asset('js/list.js') }}" defer></script>
  </div>
</div>
@endsection
