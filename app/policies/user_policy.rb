class UserPolicy < ApplicationPolicy
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end

  def show?
    true
  end

  def projects?
    true
  end

  def concluded?
    true
  end

  def skills?
    true
  end

  def badges?
    true
  end
end
