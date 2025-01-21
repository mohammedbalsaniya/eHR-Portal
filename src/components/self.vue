<script setup>

</script>

<template>
    <div class="container mt-4">
  <h3>Self Service</h3>

  <!-- Row 1: Personal Info and Leave Tracking -->
  <div class="row">
    <!-- Personal Info -->
    <div class="col-md-6">
      <div class="card">
        <div class="card-header bg-primary text-white">Personal Info</div>
        <div class="card-body">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <button class="btn btn-sm btn-secondary">Edit Info</button>
        </div>
      </div>
    </div>

    <!-- Leave Tracking -->
    <div class="col-md-6">
      <div class="card">
        <div class="card-header bg-success text-white">Leave Tracking</div>
        <div class="card-body">
          <p><strong>Remaining Leaves:</strong> 8</p>
          <p><strong>Last Leave Taken:</strong> Dec 15, 2024</p>
          <button class="btn btn-sm btn-primary">Apply for Leave</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Row 2: Payslips -->
  <div class="row mt-4">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header bg-info text-white">Payslips</div>
        <div class="card-body">
          <p>Download your latest payslips here:</p>
          <button class="btn btn-sm btn-info">Download Payslip</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>