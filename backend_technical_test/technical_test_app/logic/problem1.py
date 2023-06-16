from typing import List
from rest_framework.response import Response

class Chess:
    def __init__(self, n: int=0, k: int=0, rq: int=0, cq: int=0, obstacles: List[List[int]]=[]):
        self.n = n
        self.k = k
        self.rq = rq
        self.cq = cq
        self.obstacles = obstacles

    def validate(self):
        self._validate_field_range(self.n, 'n')
        self._validate_field_k()
        self._validate_field_range(self.rq, 'rq')
        self._validate_field_range(self.cq, 'cq')
        self._validate_obstacles()


    def _validate_field_range(self, field_value: int, field_name: str):
        if not self.validate_is_field_number(field_value):
            raise ValueError (f"The '{field_name}' field must be a number.")
        if not (0 < field_value <= 100000):
            raise ValueError(f"The value of '{field_name}' must be between 0 and 100,000.")
    
    def _validate_field_k(self):
        if not self.validate_is_field_number(self.k):
            raise ValueError ("The 'k' field must be a number.")
        if not (0 <= self.k <= 100000):
            raise ValueError("The value of 'k' must be between 0 and 100,000.")

    def _validate_obstacles(self):
        if len(self.obstacles) == self.k*2:
            raise ValueError(f"The number of obstacles must be the same as 'k: {self.k}'")

    def validate_is_field_number(self, field_value):
        if isinstance(field_value, (int)): 
            return True

    def queensAttack(self):

        print(self.n, self.k, self.rq, self.obstacles)
        count = 0
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (-1, -1), (1, -1), (-1, 1)]
        obstacles_set = set((r, c) for r, c in self.obstacles)
        if self.k == 0:
            # Si no hay obstáculos, la reina puede atacar todas las casillas en cada dirección
            for dr, dc in directions:
                r, c = self.rq + dr, self.cq + dc
                while 1 <= r <= self.n and 1 <= c <= self.n:
                    count += 1
                    r += dr
                    c += dc
        else:
            for dr, dc in directions:
                r, c = self.rq + dr, self.cq + dc
                while 1 <= r <= self.n and 1 <= c <= self.n and (r, c) not in obstacles_set:
                    count += 1
                    r += dr
                    c += dc
        
        print(self.n)
        print(self.k)
        print(self.cq)
        print(self.rq)
        return count
